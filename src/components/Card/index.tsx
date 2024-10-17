import { MdSupervisedUserCircle } from 'react-icons/md'

export default function Card() {
  return (
    <div className='bg-bgSoft p-5 rounded-lg cursor-pointer flex gap-5 w-full hover:bg-lightBlack'>
      <MdSupervisedUserCircle size={24}/>
      <div className='flex flex-col gap-5'>
        <span>Total Users</span>
        <span className='text-xl font-medium'>22.783</span>
        <span className='text-sm font-light'>
          <span className='text-lime-500'>14%</span> more than previous week</span>
      </div>
    </div>
  )
}
