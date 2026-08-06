import { NextResponse } from "next/server"

/**
 * Preview-only stand-in for the real /flashcards/generate endpoint.
 * It returns the same envelope shape (request / template / selection /
 * cards[].components[]) so public/flashcards.html can be reviewed locally.
 * Delete this route when pointing the page at the real API.
 */

const ART = ["/demo/carrot.png", "/demo/broccoli.png", "/demo/apple.png", "/demo/ant.png"]

type Component = {
  componentId: string
  componentType: string
  content?: string
  editable?: boolean
  assetReference?: {
    assetId: string | null
    imageUrl?: string
    caption?: string
    queryUsed?: string
    status: string
    similarity?: number
  }
}

function asset(index: number, caption: string) {
  return {
    assetId: `asset_${index}`,
    imageUrl: ART[index % ART.length],
    caption,
    queryUsed: caption.toLowerCase(),
    status: "matched",
    similarity: 0.82 + (index % 5) / 100,
  }
}

function singleImageCard(index: number, word: string): Component[] {
  return [
    { componentId: "image_main", componentType: "image", assetReference: asset(index, word) },
    { componentId: "title", componentType: "title", content: word, editable: true },
    { componentId: "support", componentType: "supportive_text", content: `${word} helps you grow big and strong.` },
    { componentId: "fact", componentType: "fact", content: `${word} is a healthy food we can eat every day.` },
  ]
}

function letterCard(index: number, letter: string, words: string[]): Component[] {
  return [
    { componentId: "title", componentType: "title", content: `${letter}${letter.toLowerCase()}` },
    { componentId: "image_1", componentType: "image", assetReference: asset(index, words[0]) },
    { componentId: "image_2", componentType: "image", assetReference: asset(index + 1, words[1]) },
  ]
}

function blendCard(index: number, blend: string, words: string[]): Component[] {
  return [
    { componentId: "title", componentType: "title", content: blend },
    ...words.map((word, i) => ({
      componentId: `image_${i + 1}`,
      componentType: "image",
      assetReference: asset(index + i, word),
    })),
  ]
}

function numberCard(value: number, word: string): Component[] {
  return [
    { componentId: "title", componentType: "title", content: String(value) },
    { componentId: "caption", componentType: "caption", content: word },
    { componentId: "footer", componentType: "footer", content: `Count out loud: 1 to ${value}` },
  ]
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const query: string = body?.query ?? "Generate flashcards on vegetables"
  const ageGroup: string = body?.ageGroup ?? "3-4"
  const count: number = Math.min(Math.max(Number(body?.count) || 5, 1), 20)

  const builders: Component[][] = [
    singleImageCard(0, "Carrot"),
    letterCard(0, "A", ["Apple", "Ant"]),
    blendCard(0, "bl", ["Blocks", "Black", "Blue", "Blood"]),
    numberCard(8, "eight"),
    singleImageCard(2, "Apple"),
    singleImageCard(1, "Broccoli"),
  ]

  const cards = Array.from({ length: count }, (_, index) => ({
    cardId: `card_${index + 1}`,
    components: builders[index % builders.length],
  }))

  return NextResponse.json({
    request: {
      query,
      topic: query.replace(/^generate flashcards on\s*/i, "") || "vegetables",
      ageGroup,
      learningObjective: "vocabulary_building",
    },
    template: {
      name: "Vocabulary Card",
      templateVersion: 3,
      componentHierarchy: ["title", "image_main", "image_1", "image_2", "caption", "support", "fact", "footer"],
      renderingHints: { imageDominance: "high", textScale: "medium" },
    },
    selection: { ruleName: "age_appropriate_vocabulary" },
    renderingMetadata: { contentModel: "preview-mock" },
    cards,
  })
}
