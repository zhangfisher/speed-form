import { useReactive } from "ahooks";
import { useStore, $} from "@speedform/reactive";
import { delay }  from "flex-tools/async/delay"
import { Card, ColorBlock, Divider, Tips } from "@speedform/demo-components";
 

export type BookType =  {
  name:string
  price:number
  author:string
  count:number
  total:number
}
export type MyStateType = {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    fullName: (user:any) =>string;
    age: number;
    sex: 1 | 0,
    addresss: {
      city: string;
      street: string;
    }[];
  };
  books: {
    name: string;
    price: number;
    author: string;
    count:number
  }[];
  orders: ({id:number,bookId:string,price:number,count:number})[]
  sales: {
    total: number;
  };
};

export default () => {
	const store = useStore({
		user: {
			id: "zhangfisher",
			firstName: "zhang",
			lastName: "tom",
			fullName: (user: any) => {
				return (user.firstName + user.lastName) as string;
			},
			age: 18,
			sex: 1,
			addresss: [
				{ city: "北京", street: "朝阳区" },
				{ city: "上海", street: "浦东区" },
				{ city: "广州", street: "天河区" },
			],
			// 异步计算，由于没有指定依赖，所以只会运行一次,如果要重新计算需要手动调用
			avatar: async () => {
				await delay(1000);
				return "User Avatar";
			},
		},
		books: [
			{
				name: "张三",
				price: 18,
				author: "tom",
				count: 2,
				total: (book: BookType) => book.price * book.count,
			},
			{
				name: "李四",
				price: 19,
				author: "jack",
				count: 3,
				total: (book: BookType) => book.price * book.count,
			},
			{
				name: "王五",
				price: 20,
				author: "bob",
				count: 4,
				total: (book: BookType) => book.price * book.count,
			},
		],
		orders: [],
		sales: {
			total: 0,
		},
	});

  // @ts-ignore
  // globalThis.Store = store
	const newBook = useReactive({
		name: "新书",
		author: "zhang",
		price: 100,
		count: 1,
	});

	return (
		<div className="read-the-docs">
			<Card title="同步计算属性">
				<Tips text="修改{firstName}会引起同步计算属性{FullName}更新" />
				<div>
					<div>
						firstName=<input	value={store.state.user.firstName} onChange={store.sync(["user", "firstName"])}/>
						<button onClick={() => (store.state.user.firstName = "Zhang")}>恢复</button>
					</div>
					<ColorBlock name="FirstName" value={store.state.user.firstName} />
				</div>
				<ColorBlock name="LastName" value={store.state.user.lastName} />
				<ColorBlock name="FullName" value={store.state.user.fullName} />
				<div>
					Age=
					<input value={store.state.user.age} onChange={store.sync(["user", "age"])} />
					<button onClick={() => (store.state.user.age = 100)}>恢复</button>
				</div>
				<ColorBlock name="Age" value={$(store.state.user.age)} />
			</Card>

			<Card title="书目数组计算属性">
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
						<ColorBlock style={{ flexGrow: 1 }} value="名称" />
						<ColorBlock style={{ width: 80 }} value="作者" />
						<ColorBlock style={{ width: 80 }} value="单价" />
						<ColorBlock style={{ width: 80 }} value="数量" />
						<ColorBlock style={{ width: 80 }} value="总价" />
					</div>

					{store.state.books.map((book, index: any) => {
						return (
							<div
								key={index}
								style={{ width: "100%", display: "flex", flexDirection: "row" }}
							>
								<ColorBlock style={{ flexGrow: 1 }} value={book.name} />
								<ColorBlock style={{ width: 80 }} value={$(book.author)} />
								<ColorBlock style={{ width: 80 }} value={`￥${$(book.price)}`} />
								<ColorBlock style={{ width: 80 }} value={$(book.count)} />
								<ColorBlock style={{ width: 80 }} value={`￥${$(book.total)}`} />
							</div>
						);
					})}
					<Divider />
					<div
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "row",
							paddingTop: "12px",
						}}
					>
						<input
							style={{ flexGrow: 1 }}
							value={newBook.name}
							onChange={(e) => (newBook.name = e.target.value)}
						/>
						<input
							style={{ width: 80 }}
							value={newBook.author}
							onChange={(e) => (newBook.author = e.target.value)}
						/>
						<input
							style={{ width: 80 }}
							value={newBook.price}
							onChange={(e) => (newBook.price = Number(e.target.value))}
						/>
						<input
							style={{ width: 80 }}
							value={newBook.count}
							onChange={(e) => (newBook.count = Number(e.target.value))}
						/>
					</div>
					{/* <button onClick={()=>state.actions.addBook(newBook.name,newBook.author,newBook.price,newBook.count)}>添加书籍</button>              
            <button onClick={()=>state.actions.addBookAsync(newBook)}>异步添加书籍</button>               */}
				</div>
			</Card>
		</div>
	);
}

