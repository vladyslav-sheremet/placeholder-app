import { useState } from 'react'

import useFetchData from '../hooks/useFetchData'

import ButtonComponent from '../components/ButtonComponent'
import Header from '../components/Header'
import Photos from '../components/Photos'


function MainPage() {
    const [count, setcount] = useState<number>(6)
    const [url, setUrl] = useState<string>('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=6')

    const { data, error, loading } = useFetchData(url)   

    const showMoreHandler = () => {
        setUrl(`https://jsonplaceholder.typicode.com/photos?_start=${count}&_end=${count + 6}&_limit=6`)
        setcount(count + 6)
    }

    return (
        <div>
            <Header />
            <Photos data={data} error={error} loading={loading} />
            <ButtonComponent showMoreHandler={showMoreHandler} />
        </div>
    );
}

export default MainPage
