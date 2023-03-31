import {useEffect, useState} from 'react'
import { Movie } from '../typing';
import Image from 'next/image'
import { baseUrl } from '../constants/movie';
import {BsFillPlayFill} from 'react-icons/bs';
import {MdInfo} from 'react-icons/md';
import {modalState, movieState} from '../atoms/modalAtom';
import {useRecoilState} from 'recoil';

interface Props {
    netflixOriginals: Movie[]
  }

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
    const [showModal, setShowModal] = useRecoilState(modalState);

    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])

  return (
    <div className='flex flex-col space-y-2 py-16 pl-4 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
        <div className='absolute top-0 left-0 h-[90vh] w-full -z-10'>
            <Image 
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            layout="fill"
            alt={movie?.title}
            />
        </div>

        <h1 className='text-2xl font-bold md:text-4xl lg:text-6xl'>
          {movie?.title || movie?.original_name}
        </h1>

        <p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl'>
          {movie?.overview}
        </p>

        <div className='flex items-center gap-x-2'>
          <button className='bannerButton bg-white text-black'>
            <BsFillPlayFill />
            Play
          </button>

          <button 
            onClick={() => {
              setCurrentMovie(movie)
              setShowModal(true)
            }}
            className='bannerButton bg-gray-400 text-white'>
            <MdInfo />
            More Info
          </button>
        </div>
    </div>
  )
}

export default Banner
