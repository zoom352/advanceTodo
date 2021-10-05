import { getPagesArray } from "../../../utils/pages";



const Pagination = ({totalPages, page, ChangePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return <div>
        {pagesArray.map(p => 
        <span 
        onClick={() => ChangePage(p)}
        key={p}
        className={page === p ? 'page page__current' : 'page'}>
          {p}</span>)}
    </div>
}


export default Pagination;