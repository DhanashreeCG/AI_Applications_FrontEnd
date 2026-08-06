### Generating Flashcards as per template response

### Templates 
- Below is the database template types and that could be more dynamic. It may include any subject any topic, any data, in response, we are getting only a single type of template responses, so we have to generate it. 
``` [
  {
    "name": "large_image_label_v1",
    "description": "Large image with a single vocabulary word",
    "templateType": "VOCABULARY",
    "layoutType": "VERTICAL",
    "supportedAgeGroups": ["2-3", "3-4"],
    "supportedGrades": [],
    "learningObjectives": ["Vocabulary", "Recognition", "Identification"],
    "subjectsSupported": ["General", "EVS", "Language"],
    "difficultyLevels": ["Beginner"],
    "tags": ["visual", "image", "word"],
    "pageSize": "A6",
    "orientation": "PORTRAIT",
    "layoutDefinition": {
      "regions": [
        {
          "id": "header",
          "components": [
            {
              "id": "subject",
              "type": "text",
              "editable": true
            }
          ]
        },
        {
          "id": "body",
          "components": [
            {
              "id": "image",
              "type": "image",
              "editable": true
            }
          ]
        },
        {
          "id": "footer",
          "components": [
            {
              "id": "title",
              "type": "text",
              "editable": true
            }
          ]
        }
      ]
    },
    "templateVersion": "1.0",
    "active": true
  },
  {
    "name": "image_word_sentence_v1",
    "description": "Image with word and simple sentence",
    "templateType": "READING",
    "layoutType": "VERTICAL",
    "supportedAgeGroups": ["3-4", "4-5"],
    "supportedGrades": [],
    "learningObjectives": ["Vocabulary", "Reading"],
    "subjectsSupported": ["General", "Language"],
    "difficultyLevels": ["Beginner"],
    "tags": ["sentence", "reading"],
    "pageSize": "A6",
    "orientation": "PORTRAIT",
    "layoutDefinition": {
      "regions": [
        {
          "id": "header",
          "components": [
            {
              "id": "subject",
              "type": "text",
              "editable": true
            }
          ]
        },
        {
          "id": "body",
          "components": [
            {
              "id": "image",
              "type": "image",
              "editable": true
            }
          ]
        },
        {
          "id": "footer",
          "components": [
            {
              "id": "title",
              "type": "text",
              "editable": true
            },
            {
              "id": "sentence",
              "type": "text",
              "editable": true,
              "constraints": {
                "maxLines": 2,
                "maxCharacters": 80
              }
            }
          ]
        }
      ]
    },
    "templateVersion": "1.0",
    "active": true
  },
  {
    "name": "image_fact_v1",
    "description": "Image with educational fact",
    "templateType": "FACT",
    "layoutType": "VERTICAL",
    "supportedAgeGroups": ["5-6", "6-8"],
    "supportedGrades": [],
    "learningObjectives": ["Knowledge", "Science Facts"],
    "subjectsSupported": ["Science", "EVS"],
    "difficultyLevels": ["Intermediate"],
    "tags": ["fact", "science"],
    "pageSize": "A6",
    "orientation": "PORTRAIT",
    "layoutDefinition": {
      "regions": [
        {
          "id": "header",
          "components": [
            {
              "id": "subject",
              "type": "text",
              "editable": true
            }
          ]
        },
        {
          "id": "body",
          "components": [
            {
              "id": "image",
              "type": "image",
              "editable": true
            }
          ]
        },
        {
          "id": "footer",
          "components": [
            {
              "id": "title",
              "type": "text",
              "editable": true
            },
            {
              "id": "fact",
              "type": "text",
              "editable": true
            }
          ]
        }
      ]
    },
    "templateVersion": "1.0",
    "active": true
  },
  {
    "name": "image_question_v1",
    "description": "Image with recognition question",
    "templateType": "QUESTION",
    "layoutType": "VERTICAL",
    "supportedAgeGroups": ["4-5", "5-6"],
    "supportedGrades": [],
    "learningObjectives": ["Recognition", "Question & Answer"],
    "subjectsSupported": ["General"],
    "difficultyLevels": ["Beginner"],
    "tags": ["question"],
    "pageSize": "A6",
    "orientation": "PORTRAIT",
    "layoutDefinition": {
      "regions": [
        {
          "id": "body",
          "components": [
            {
              "id": "image",
              "type": "image",
              "editable": true
            }
          ]
        },
        {
          "id": "footer",
          "components": [
            {
              "id": "question",
              "type": "text",
              "editable": true
            }
          ]
        }
      ]
    },
    "templateVersion": "1.0",
    "active": true
  },
  {
    "name": "image_mcq_v1",
    "description": "Image with multiple choice question",
    "templateType": "MCQ",
    "layoutType": "VERTICAL",
    "supportedAgeGroups": ["6-8", "8-10"],
    "supportedGrades": [],
    "learningObjectives": ["Question & Answer"],
    "subjectsSupported": ["General", "Science"],
    "difficultyLevels": ["Intermediate"],
    "tags": ["mcq", "quiz"],
    "pageSize": "A6",
    "orientation": "PORTRAIT",
    "layoutDefinition": {
      "regions": [
        {
          "id": "body",
          "components": [
            {
              "id": "image",
              "type": "image",
              "editable": true
            }
          ]
        },
        {
          "id": "footer",
          "components": [
            {
              "id": "question",
              "type": "text",
              "editable": true
            },
            {
              "id": "options",
              "type": "options",
              "editable": true,
              "minOptions": 2,
              "maxOptions": 4
            }
          ]
        }
      ]
    },
    "templateVersion": "1.0",
    "active": true
  },
  {
    "name": "compare_two_images_v1",
    "description": "Compare two concepts",
    "templateType": "COMPARISON",
    "layoutType": "TWO_COLUMN",
    "supportedAgeGroups": ["5-6", "6-8"],
    "supportedGrades": [],
    "learningObjectives": ["Comparison"],
    "subjectsSupported": ["General", "Science"],
    "difficultyLevels": ["Intermediate"],
    "tags": ["compare"],
    "pageSize": "A6",
    "orientation": "LANDSCAPE",
    "layoutDefinition": {
      "regions": [
        {
          "id": "left",
          "components": [
            {
              "id": "leftImage",
              "type": "image",
              "editable": true
            }
          ]
        },
        {
          "id": "right",
          "components": [
            {
              "id": "rightImage",
              "type": "image",
              "editable": true
            }
          ]
        },
        {
          "id": "bottom",
          "components": [
            {
              "id": "question",
              "type": "text",
              "editable": true
            }
          ]
        }
      ]
    },
    "templateVersion": "1.0",
    "active": true
  },
  {
    "name": "matching_pair_v1",
    "description": "Matching image with word",
    "templateType": "MATCHING",
    "layoutType": "TWO_COLUMN",
    "supportedAgeGroups": ["3-4", "4-5"],
    "supportedGrades": [],
    "learningObjectives": ["Matching", "Memory"],
    "subjectsSupported": ["General"],
    "difficultyLevels": ["Beginner"],
    "tags": ["matching", "memory"],
    "pageSize": "A6",
    "orientation": "LANDSCAPE",
    "layoutDefinition": {
      "regions": [
        {
          "id": "left",
          "components": [
            {
              "id": "image",
              "type": "image",
              "editable": true
            }
          ]
        },
        {
          "id": "right",
          "components": [
            {
              "id": "title",
              "type": "text",
              "editable": true
            }
          ]
        }
      ]
    },
    "templateVersion": "1.0",
    "active": true
  },
  {
    "name": "counting_objects_v1",
    "description": "Count the objects",
    "templateType": "COUNTING",
    "layoutType": "GRID",
    "supportedAgeGroups": ["3-4", "4-5"],
    "supportedGrades": [],
    "learningObjectives": ["Counting"],
    "subjectsSupported": ["Math"],
    "difficultyLevels": ["Beginner"],
    "tags": ["counting", "math"],
    "pageSize": "A6",
    "orientation": "PORTRAIT",
    "layoutDefinition": {
      "regions": [
        {
          "id": "body",
          "components": [
            {
              "id": "objectGrid",
              "type": "imageCollection",
              "editable": true
            }
          ]
        },
        {
          "id": "footer",
          "components": [
            {
              "id": "question",
              "type": "text",
              "editable": true
            }
          ]
        }
      ]
    },
    "templateVersion": "1.0",
    "active": true
  },
  {
    "name": "classification_v1",
    "description": "Classify the object",
    "templateType": "CLASSIFICATION",
    "layoutType": "VERTICAL",
    "supportedAgeGroups": ["5-6", "6-8"],
    "supportedGrades": [],
    "learningObjectives": ["Classification"],
    "subjectsSupported": ["General", "Science"],
    "difficultyLevels": ["Intermediate"],
    "tags": ["classification", "sorting"],
    "pageSize": "A6",
    "orientation": "PORTRAIT",
    "layoutDefinition": {
      "regions": [
        {
          "id": "body",
          "components": [
            {
              "id": "image",
              "type": "image",
              "editable": true
            }
          ]
        },
        {
          "id": "footer",
          "components": [
            {
              "id": "categories",
              "type": "chips",
              "editable": true
            }
          ]
        }
      ]
    },
    "templateVersion": "1.0",
    "active": true
  },
  {
    "name": "phonics_v1",
    "description": "Letter with image and phonics",
    "templateType": "PHONICS",
    "layoutType": "VERTICAL",
    "supportedAgeGroups": ["3-4", "4-5"],
    "supportedGrades": [],
    "learningObjectives": ["Phonics"],
    "subjectsSupported": ["Language"],
    "difficultyLevels": ["Beginner"],
    "tags": ["phonics", "alphabet"],
    "pageSize": "A6",
    "orientation": "PORTRAIT",
    "layoutDefinition": {
      "regions": [
        {
          "id": "header",
          "components": [
            {
              "id": "letter",
              "type": "text",
              "editable": true
            }
          ]
        },
        {
          "id": "body",
          "components": [
            {
              "id": "image",
              "type": "image",
              "editable": true
            }
          ]
        },
        {
          "id": "footer",
          "components": [
            {
              "id": "word",
              "type": "text",
              "editable": true
            },
            {
              "id": "phonics",
              "type": "text",
              "editable": true
            }
          ]
        }
      ]
    },
    "templateVersion": "1.0",
    "active": true
  }
]```

### API Response

