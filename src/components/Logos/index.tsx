import papymes from '@/public/img/papymescolor.png';
import pamotors from '@/public/img/pamotorscolor.png';
import pafactoring from '@/public/img/pafactoringcolor.png';
import Image from 'next/image';
import Link from 'next/link';

const Logos = () => {

    const logos = [
        {
            id: 1,
            logo: papymes,
            path: '/papymes'
        },
        {
            id: 2,
            logo: pamotors,
            path: '/pamotors'
        },
        {
            id: 3,
            logo: pafactoring,
            path: '/pafactoring'
        }
    ]

    return (
        <div className='max-w-screen-xl mx-auto pb-14'>
            <h3 className='text-[#222770] text-center mx-auto p-10 text-[35px]'>Tambien te podría interesar</h3>
            <div className='grid md:grid-cols-3 items-center logos'>
                {
                    logos?.map((item: any) => {
                        return (
                            <div key={item.id} className='flex justify-center items-center text-center'>
                                    <Link className='cursor-pointer' href={item.path}><Image className={`${item.path === "/pamotors" ? "w-full" : "w-8/12"} mx-auto flex justify-center`} src={item.logo} width={500} height={500} alt='logo' /></Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Logos;