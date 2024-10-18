const Conversation = () => {
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://avatar.iran.liara.run/public/girl?username=%27lilith%27" alt="user avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-semibold text-gray-800">Arohi Yadav</p>
                <span className="text-xl">😉</span>
            </div>
        </div>
    </div>

    <div className="divider my-0 py-0 h-2 rounded"/>
    </>
  )
}
export default Conversation
