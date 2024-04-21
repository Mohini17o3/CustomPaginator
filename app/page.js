import styles from "./page.module.css";

export default function Home({totalCount  , pageSize , siblingCount=1, currentPage}) {

  const paginationRange = useMemo (()=> 
    {
      const totalPageCount = Math.ceil(totalCount/pageSize); 
      const totalPageNumbers = siblingCount +5 ;
    } , [totalCount , pageSize, siblingCount , currentPage])
  return (
    
    
    

    
  );
}
