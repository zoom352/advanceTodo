import MySelect from "./select/MySelect";



const PostFilter = ({filter, setFilter}) => {

    return <div>
        <input 
        value={filter.search}
        onChange={event => setFilter({...filter, search: event.target.value})}
        placeholder='search'/>
      <MySelect 
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='sort'
         options={[
           {value: 'title', name: 'по названию'},
           {value: 'body', name: 'по имени'}
         ]}/>
    </div>
}


export default PostFilter;