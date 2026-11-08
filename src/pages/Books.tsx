import BookPreview from '../components/BookPreview';
import './Books.css';

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
    <div className="shell__panel books-panel">
      <section className="books__section">
        <div className="books__header">
          <h1 className="books__title">My Published Books</h1>
          <p className="books__subtitle">Discover my published works and research contributions.</p>
        </div>

        <div className="books__grid">
          {books.map((book, index) => (
            <BookPreview key={index} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}