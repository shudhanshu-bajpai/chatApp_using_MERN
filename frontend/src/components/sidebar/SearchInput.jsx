import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder="Search..." className=' pl-4 input input-bordered rounded-full cursor-pointer w-64'/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white hover:bg-black hover:border-white'> 
        <IoSearch className='size-6'/>
        </button>
    </form>
  )
}

export default SearchInput
