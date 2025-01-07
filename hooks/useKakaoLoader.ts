import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk'

export const useKakaoLoader = () => {
    const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY
    if (!apiKey) {
        throw new Error('Kakao Maps API key를 확인해주세요')
    }

    try {
        const [loading, error] = useKakaoLoaderOrigin({
            appkey: apiKey,
            libraries: ['clusterer', 'drawing', 'services'],
        })

        return { loading, error }
    } catch (error) {
        console.error('Kakao Maps 로딩에 실패하였습니다', error)
        return { loading: false, error: error as Error }
    }
}
