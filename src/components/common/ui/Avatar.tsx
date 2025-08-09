import IKImageWrapper from '@/components/media/IKImageWrapper'

export const Avatar = ({ path }: { path: string }) => {
    return (
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <IKImageWrapper
                path={path}
                width={100}
                height={100}
                alt="avatar"
            />
        </div>
    )
}

