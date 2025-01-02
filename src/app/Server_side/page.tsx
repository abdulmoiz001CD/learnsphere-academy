

interface Books {
    book: {
      id: number;
      name: string;
      type: "fiction" | "non-fiction" | "fantasy" | "biography";
      available: boolean;
    };
  }


  export const getServerSideProps  = async ()=> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const book = await res.json();
  
    return {
      props: {
        book
      }
    };
  }
  
  
  const page: React.FC<Books> = ({ book }) => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Book Details</h1>
  
        <div className="max-w-sm mx-auto my-5 bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{book.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{book.type}</p>
            <p className={`text-sm ${book.available ? 'text-green-500' : 'text-red-500'}`}>
              {book.available ? "Available" : "Out of Stock"}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default page;
  
