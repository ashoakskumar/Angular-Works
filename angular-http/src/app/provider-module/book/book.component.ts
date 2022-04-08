import { Component, Inject, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { preferredBooksFactory, PREFERRED_BOOK } from '../preferred-book';
const JAVA_BOOK = new Book('Thinking in Java', 'Java');
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [BookService,{provide: Book, useValue: JAVA_BOOK},
  {provide: PREFERRED_BOOK, useFactory: preferredBooksFactory(3),deps:[Book, BookService]}]
})
export class BookComponent implements OnInit {


  constructor(@Inject(PREFERRED_BOOK) public preferredBooks: string) { }

  ngOnInit(): void {
  }

}
