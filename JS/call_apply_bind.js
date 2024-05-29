globalThis.id = 'globalThis';
this.id = 'module this';

f();

const f2 = () => console.log('arrowFn.this.id', this.id, globalThis.id);
f2();

// function f() {
//   const id = 1;
//   console.log('function.this.id =', this.id);
// }

function f(x, y) {
  const id = 1;
  console.log('function.this.id =', this.id);
  console.log('🚀 ~ x y:', x, y);
}

// f.bind({ id: 1, name: 'Hong' })();
const user = { id: 1, name: 'Hong' };
const newF = f.bind(user);
newF(1, 11);
f.call(user, 2, 22);
f.apply(user, [3, 33]);
f.call(globalThis, 4, 44);
f(4, 44);

console.log('-----------------');
f2.call(user);
f2.bind(user)();

console.log('******************');
globalThis.name = 'xxxxxxxxxxxxxx';
this.name = 'TTTTTTTTTTTTTTT';
const obj = {
  name: 'ObjName',
  bark1() {
    console.log('1=', this.name);
    const self = this;
    setInterval(function f() {
      console.log('11=', this, self.name);
      clearInterval(this);
    }, 1000);
    console.log('xxxx');
  },
  bark2() {
    console.log('2=', this.name);
    setTimeout(() => {
      console.log('22=', this.name);
    }, 1000);
  },
};

obj.bark1();
obj.bark2();
