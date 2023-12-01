/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Title {
  title: string;
}

class Component<T extends Title> {
  constructor(public props: T) {}
}

class Page extends Component<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const pageInstance = new Page({ title: "Моя сторінка" });
pageInstance.pageInfo();

export {};
