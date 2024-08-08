import { createContext, useEffect, useState, ReactNode } from "react";

type ProdProps = {
  id: number;
  qtd: number;
  name: string;
  description: string;
  full_description: string;
  price: number;
  images: string;
};

type ProdContextType = {
  prods: ProdProps[];
  prodInCart: ProdProps[];
  search: string;
  NoProduct: boolean;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setProds: React.Dispatch<React.SetStateAction<ProdProps[]>>;
  setProdInCart: React.Dispatch<React.SetStateAction<ProdProps[]>>;
};

type ProdContextProps = {
  children: ReactNode;
};

export const ProdContext = createContext<ProdContextType | null>(null);

const getArrayProds = () => {
  const locaTodos = localStorage.getItem("cart");
  if (locaTodos) {
    return JSON.parse(locaTodos);
  } else {
    return [];
  }
};

const ProdContextProvider = ({ children }: ProdContextProps) => {
  const [prods, setProds] = useState<ProdProps[]>([]);
  const [prods2, setProds2] = useState<ProdProps[]>([]);
  const [search, setSearch] = useState("");
  const [NoProduct, setNoProduct] = useState(false);

  const [prodInCart, setProdInCart] = useState<ProdProps[]>(getArrayProds);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let calcValue = 0;
    prodInCart.forEach((prod) => {
      const calc = prod.qtd * prod.price;
      calcValue += calc;
    });

    setTotal(calcValue);
  }, [prodInCart]);

  useEffect(() => {
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
      setProdInCart(JSON.parse(cartFromStorage));
    }
  }, []);

  useEffect(() => {
    const fetchProd = async () => {
      try {
        const response = await fetch("/file.json");
        const prodsFetched: ProdProps[] = await response.json();
        setProds(prodsFetched);
        setProds2(prodsFetched);
        localStorage.setItem("allProds", JSON.stringify(prodsFetched));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProd();
  }, []);

  //----------------------Search For a product-----------------

  useEffect(() => {
    setProds(prods2);
    const prodSelected = prods2.filter((prod) => {
      const prodName = prod.name
        .split(" ")
        .map((letter) => letter.toLocaleLowerCase())
        .join("");

      const prodSearch = search
        .split(" ")
        .map((letter: string) => letter.toLocaleLowerCase())
        .join("");

      return prodName.includes(prodSearch);
    });
    setProds(prodSelected);

    //Set message no prods found.
    if (search !== "" && prodSelected.length === 0) {
      return setNoProduct(true);
    } else {
      return setNoProduct(false);
    }
  }, [search]);

  return (
    <ProdContext.Provider value={{ prods, setProds, search, setSearch, NoProduct, prodInCart, setProdInCart, total, setTotal }}>
      {children}
    </ProdContext.Provider>
  );
};

export default ProdContextProvider;
