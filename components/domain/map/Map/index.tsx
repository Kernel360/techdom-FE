'use client'

import { LegacyRef, memo, useEffect } from 'react'
import { Map as KakaoMap } from 'react-kakao-maps-sdk'

import { useKakaoLoader } from '@/hooks/useKakaoLoader'
import { LatLng } from '@/types/location'

interface MapProps {
    center?: LatLng
    zoom?: number
    ref?: LegacyRef<kakao.maps.Map>
    children?: React.ReactNode
    onLoad?: (isMapLoaded: boolean) => void
    onZoomChanged?: (level: number) => void
}

const Map = memo(
    ({
        center = { lat: 37.5665, lng: 126.978 },
        zoom = 10,
        ref,
        children,
        onLoad,
        onZoomChanged,
        ...props
    }: MapProps) => {
        const { loading, error } = useKakaoLoader()

        const handleZoomChanged = (map: kakao.maps.Map) => {
            const currentZoom = map.getLevel()
            onZoomChanged?.(currentZoom)
        }

        useEffect(() => {
            if (!loading && !error) {
                onLoad?.(true)
            }
        }, [loading, error, onLoad])

        if (loading) return <div>지도를 불러오는 중...</div>
        if (error) return <div>지도를 불러오는데 실패했습니다</div>

        return (
            <KakaoMap
                ref={ref}
                center={center}
                level={zoom}
                style={{ width: '100%', height: '100%' }}
                onZoomChanged={handleZoomChanged}
                {...props}
            >
                {children}
            </KakaoMap>
        )
    },
)

Map.displayName = 'Map'

export default Map
