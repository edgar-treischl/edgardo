import React from "react";
import "./BookPreview.css";

interface BookProps {
  title: string;
  cover: string;
  summary: string;
  publisher: string;
  year: string;
  genre: string;
  purchaseUrl?: string;
  subtitle?: string;
  details?: React.ReactNode;
}

interface BookPreviewProps {
  book: BookProps;
}

export default function BookPreview({ book }: BookPreviewProps) {
  if (!book) return null;

  return (
    <article className="book-preview">
      <div className="book-preview__cover">
        <img src={book.cover} alt={`Cover of ${book.title}`} />
      </div>

      <div className="book-preview__content">
        <span className="book-preview__label">
          PUBLISHED BOOK
        </span>

        <h2>{book.title}</h2>

        {book.subtitle && (
          <p className="book-preview__subtitle">
            {book.subtitle}
          </p>
        )}

        <p className="book-preview__meta">
          {[book.publisher, book.year, book.genre]
            .filter(Boolean)
            .join(" · ")}
        </p>

        <div className="book-preview__summary">
          <h3>About this book</h3>
          <p>{book.summary}</p>
        </div>

        {book.details && (
          <div className="book-preview__details">
            {book.details}
          </div>
        )}

        {book.purchaseUrl && (
          <a
            className="book-preview__button"
            href={book.purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Purchase book <span>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
