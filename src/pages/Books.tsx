import BookPreview from '../components/BookPreview';
import '../styles/Books.css';

interface Book {
  title: string;
  cover: string;
  summary: string;
  publisher: string;
  year: string;
  genre: string;
  purchaseUrl: string;
  subtitle?: string;
  details?: React.ReactNode;
}

const books: Book[] = [
  {
    title: "First Book",
    cover: "/images/book-1.jpg",
    summary: "Description of your first book.",
    publisher: "Publisher",
    year: "2024",
    genre: "Fiction",
    purchaseUrl: "https://example.com/book-1"
  },
  {
    title: "Second Book",
    cover: "/images/book-2.jpg",
    summary: "Description of your second book.",
    publisher: "Publisher",
    year: "2025",
    genre: "Non-fiction",
    purchaseUrl: "https://example.com/book-2"
  }
];

export default function Books() {
  return (
    <main className="books-page">
      <header className="books-page__heading">
        <h1>My Published Books</h1>
        <p>Discover my published works.</p>
      </header>

      <section className="books-grid">
        {books.map((book, index) => (
          <BookPreview key={index} book={book} />
        ))}
      </section>
    </main>
  );
}