import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-1 bg-sky-500 rounded-full" >
      <input
        type="text"
        placeholder="Search for user..."
        className="placeholder-white input rounded-full cursor-pointer w-64 bg-sky-500 text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn bg-sky-500 text-white hover:bg-sky-500 hover:border-white border-none rounded-full"
      >
        <IoSearch className="size-6" />
      </button>
    </form>
  );
};
export default SearchInput;
