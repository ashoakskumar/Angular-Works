import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, defer, empty, forkJoin, from, fromEvent, generate, iif, interval, merge, Observable, of, Subscriber, throwError, timer } from 'rxjs';
import { scan, throttleTime, map, first, take, switchMap, mergeMap, startWith, concatMapTo, delay, buffer, concatMap, expand, mapTo, groupBy, reduce, debounceTime, debounce, distinct, elementAt, filter, skip, takeUntil, catchError, retryWhen, tap, delayWhen, materialize, timestamp, timeout, every, find, findIndex } from 'rxjs/operators';
@Component({
  selector: 'app-rx-js-example',
  templateUrl: './rx-js-example.component.html',
  styleUrls: ['./rx-js-example.component.scss']
})
export class RxJsExampleComponent extends Error implements OnInit {

  constructor() {
    super('It was too slow');
    this.name = 'CustomTimeoutError';
   }

  ngOnInit(): void {
   // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
  //  fromEvent(document, 'click')
  // .pipe(throttleTime(1000),scan(count => count + 1, 0))
  // .subscribe(count => console.log(`Clicked ${count} times`));
  // fromEvent(document, 'click')
  // .pipe(
  //   throttleTime(1000),
  //   map((event:any) => event.clientX),
  //   scan((count, clientX) => count + clientX, 0)
  // )
  // .subscribe(count => console.log(count));

  //   const observable = new Observable(subscriber=>{
  //     subscriber.next(1);
  //     subscriber.next(1);
  //     subscriber.next(1);
  //     setTimeout(()=>{
  //       subscriber.next(4);
  //       subscriber.complete();
  //     }, 1000);
  //   });
  //   console.log('Just before subscribe');
  //   observable.subscribe({
  //     next(x) {console.log('got value: ', x)},
  //     error(err) {console.log('Something wrong occured: ', err)},
  //     complete() {console.log('done')}
  //   })
  //   console.log('just after subscribe')
    // let mapObs = of(1,2,3).pipe(map((x) => x*x));
    // mapObs.subscribe(value => console.log(`value: ${value}`));
   // let firstObs = of(1,2,3).pipe(first()).subscribe(value=> console.log(`value: ${value}`));
  //  let concatObs = of(1,2,3,4);
  //  let concatObs2 = interval(1000).pipe(take(4));
  //  const result = concat(concatObs2, concatObs);
  //  result.subscribe(value=>console.log(`result: ${value}`));
  // const s1 = of(new Date()); //will capture current date time
  // const s2 = defer(() => of(new Date())); //will capture date time at the moment of subscription
  
  // console.log(new Date());
  
  // timer(2000)
  //   .pipe(
  //     switchMap(_ => merge(s1, s2))
  //   ).subscribe(console.log);
    // const clickOrInterval = defer(function () {
    //   return Math.random() > 0.5 
    //   ? fromEvent(document,'click') 
    //   : interval(1000);
    // });
    // clickOrInterval.subscribe(x=>console.log(x))
    // const clicksOrInterval = defer(function () {
    //   return Math.random() > 0.5
    //     ? fromEvent(document, 'click')
    //     : interval(1000);
    // });
    // clicksOrInterval.subscribe(x => console.log(x));
    // const interval$ = interval(1000);
    // const result = interval$.pipe(
    //   mergeMap(x => x % 2 === 0 ? of('a', 'b', 'c') : empty()),
    // );
    // result.subscribe(x => console.log(x));
    // const result = empty().pipe(startWith(7));
    // result.subscribe(x => console.log(x));
    // const array = [10,20,30];
    // const result = from(array);tak
    // result.subscribe(x=>console.log(x));
  //   const iterator = this.generateDoubles(3);
  //   const result = from(iterator).pipe(take(10));
  //   result.subscribe(console.log);
  // }
  // private* generateDoubles(seed:any) {
  //   let i = seed;
  //   while(true) {
  //     yield i;
  //     i = i * 2;

  //   }
    // const result = generate(0,x=>x<3,x=>x+1,x=>x);
    // result.subscribe(console.log);
    // const result1 = generate(0, x => x < 3, x => x + 1, x => x * 1000);
    // result1.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('Complete !!')
    // })
    // const intervalN = interval(1000);
    // const takeFive = intervalN.pipe(take(5));
    // takeFive.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('complete')
    // })
    // const values = of(1,2,3);
    // values.subscribe({
    //   next: val => {console.log(val)},
    //   complete: () => console.log('end'),
    //   error: err => {console.log(err)}
    // })
    // const valuesArr = of([1,2,3]);
    // valuesArr.subscribe({
    //   next: val => {console.log(val)},
    //   complete: () => console.log('end'),
    //   error: err => {console.log(err)}
    // })
    let errorCount = 0;
 
      // const errorWithTimestamp$ = throwError(() => {
      //   const error: any = new Error(`This is error number ${++errorCount}`);
      //   error.timestamp = Date.now();
      //   return error;
      // });
      
      // errorWithTimestamp$.subscribe({
      //   error: err => console.log(err,err.timestamp, err.message)
      // });
      
      // errorWithTimestamp$.subscribe({
      //   error: err => console.log(err.timestamp, err.message)
      // });
    //   const source = of(1, 2, 3);

    // const result = timer(3000).pipe(
    //   concatMapTo(source)
    // )
    // .subscribe(console.log);
    // let subscribeToFirst:boolean;
    // const firstOrSecond = iif(
    //   () => subscribeToFirst,
    //   of('First'),
    //   of('Second')
    // );
    // subscribeToFirst = true;
    // firstOrSecond.subscribe(console.log);
    // subscribeToFirst = false;
    // firstOrSecond.subscribe(console.log);
    // const firstTimer =  timer(0,1000);
    // const secondTimer = timer(500,1000);
    // const combinedTimer = combineLatest([firstTimer,secondTimer]);
    // combinedTimer.subscribe(console.log);

    // const observables = {
    //   a: of(1).pipe(delay(1000), startWith(0)),
    //   b: of(5).pipe(delay(5000), startWith(0)),
    //   c: of(10).pipe(delay(10000), startWith(0))
    // };
    // const combined = combineLatest([observables]);
    // combined.subscribe(value => console.log(value));
    // const observable = forkJoin({
    //   foo: of(1,2,3,4),
    //   bar: Promise.resolve(8),
    //   baz:timer(4000)
    // });
    // observable.subscribe({
    //   next: (val) => console.log(val),
    //   complete: ()=> console.log('This is how it ends')
    // })
    // const clicks = fromEvent(document, 'click');
    // const timer = interval(1000);
    // const clicksOrTimer = merge(clicks, timer);
    // clicksOrTimer.subscribe(x => console.log(x));
    // const clicks = fromEvent(document, 'click');
    // const intervalEvents= interval(1000);
    // const buffered = intervalEvents.pipe(buffer(clicks));
    // buffered.subscribe(console.log);
    // const click = fromEvent(document,'click');
    // const result = click.pipe(concatMap(cm => interval(1000).pipe(take(4))));
    // result.subscribe(console.log)
      // const clicks = fromEvent(document,'click');
      // const powerOfTwo = clicks.pipe(
      //   mapTo(1),
      //   expand(x => of(2 * x).pipe(delay(1000))),
      //   take(10)
      // );
      // powerOfTwo.subscribe(x=>console.log(x));
      // of(
      //   {id: 1, name: 'JavaScript'},
      //   {id: 2, name: 'Parcel'},
      //   {id: 2, name: 'webpack'},
      //   {id: 1, name: 'TypeScript'},
      //   {id: 3, name: 'TSLint'}
      // ).pipe(
      //   groupBy(p => p.id),
      //   mergeMap((group$) => group$.pipe(reduce((acc:any, cur) => [...acc, cur], [])))
      // )
      // .subscribe(p => console.log(p));
      // 
      // const letter = of('A','B','C','D');
      // const merge = letter.pipe(mergeMap(x=>interval(1000).pipe(map(i=> x+i))))
      // merge.subscribe(result=>console.log(result));
      // const switched = of(1,2,3).pipe(switchMap((x:number) => of(x,x*3,x*5)));
      // switched.subscribe(console.log);
      // const clicks = fromEvent(document, 'click');
      // const result = clicks.pipe(debounceTime(1000));
      // result.subscribe(x => console.log(x));
      // const clicks = fromEvent(document, 'click');
      // const result = clicks.pipe(
      //   scan((i) => ++i, 1),
      //   debounce((i) => interval(200 * i))
      // );
      // result.subscribe(x => console.log(x));
    //   const numbers$ = of(1, 2, 3,4,5);
 
    // numbers$
    //   .pipe(
    //     // Get the sum of the numbers coming in.
    //     scan((total, n) => total + n),
    //     // Get the average by dividing the sum by the total number
    //     // received so var (which is 1 more than the zero-based index).
    //     //map((sum, index) => sum / (index + 1))
    //   )
    //   .subscribe(console.log);
    //    
      // const distincts = of(1,2,3,4,5,3,2,1,3,2,4,5,5,6).pipe(distinct());
      // distincts.subscribe(console.log);
      // from([1,2,3]).pipe(elementAt(2)).subscribe(console.log);
      // from([{name:'ashok',location:'chennai'},{name:'kumar',location:'pondy'},{name:'dinesh',location:'trichy'},{name:'arul',location:'chennai'}])
      // .pipe(filter(x=>x.location === 'chennai')).subscribe(console.log);
      // from([{name:'ashok',location:'chennai'},{name:'kumar',location:'pondy'},{name:'dinesh',location:'trichy'},{name:'arul',location:'chennai'}])
      // .pipe(skip(1)).subscribe(console.log);
      // from([{name:'ashok',location:'chennai'},{name:'kumar',location:'pondy'},{name:'dinesh',location:'trichy'},{name:'arul',location:'chennai'}])
      // .pipe(take(1)).subscribe(console.log);
      // const source = interval(1000);
      // const clicks = fromEvent(document, 'click');
      // const result = source.pipe(takeUntil(clicks));
      // result.subscribe(console.log);
      // const clicks = fromEvent(document, 'click');
      // const result = clicks.pipe(throttleTime(1000));
      // result.subscribe(x => console.log(x));
      // of(1,2,3,4,5,6).pipe(map(x=> {
      //   if(x===4) {
      //     throw 'four!';
      //   } return x;
      // }
      // ),
      // catchError(err => of('I','II','III','IV'))
      // ).subscribe(console.log)

      // const intervals = interval(1000);
      // const count = intervals.pipe(
      //   map(x=> {
      //   if(x > 5) {
      //     throw x;
      //   } return x;
      // }),
      // retryWhen(errors => 
      //   errors.pipe(
      //     tap (val=> console.log(`value ${val} was too high`)),
      //     delayWhen(val => timer(val * 1000))
      //   )
      // )
      // );
      // count.subscribe(console.log);
      // const intr = interval(1000);
      // const taps = of(Math.random()).pipe(
      //   tap(console.log),
      //   map((y:number) => y > 0.5 ? 'Big' : 'Small')
      // );
      // const result = concat(taps,intr)
      // .subscribe(z=>console.log(z));
      // const letter = of('a','b','c',12,'d');
      // const uppercases = letter.pipe(map((x:any) => x.toUpperCase()),timestamp());
      // uppercases.subscribe(console.log)
     //of(4000,3000,2000).pipe(concatMap(duration => this.makeRequest(duration).pipe(timeout(2500),catchError(error => of(`Request Time out after: ${duration} `))))).subscribe(console.log)
    // of(1,2,3,4,5).pipe(every(x=>x<6)).subscribe(console.log);
    from([{name:'ashok',location:'chennai'},{name:'kumar',location:'pondy'},{name:'kumar',location:'trichy'},{name:'arul',location:'chennai'}])
    .pipe(findIndex(x=>x.name === 'kumar')).subscribe(console.log)
  }
  private makeRequest(duration:number) {
        return of('Request Complete').pipe(delay(duration));
  }

}   
