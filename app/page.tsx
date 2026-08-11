// The deliverable is the standalone page at /flashcards.html. A meta refresh is used
// instead of redirect() because static exports have no server to redirect from.
export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=./flashcards.html" />
      <p style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
        Redirecting to <a href="./flashcards.html">AI Flash Cards</a>…
      </p>
    </>
  )
}
