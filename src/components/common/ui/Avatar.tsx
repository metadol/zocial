import IKImageWrapper from '@/components/media/IKImageWrapper'
import { AvatarProps, AvatarWithNameProps } from '@/types/interface';
import Link from 'next/link';


export const Avatar = ({
    path,
    className = 'relative w-10 h-10',
    width = 100,
    height = 100,
    alt = 'avatar',
}: AvatarProps) => {
    return (
        <div className={`overflow-hidden rounded-full ${className}`}>
            <IKImageWrapper
                path={path || 'general/no-avatar.jpg'}
                width={width}
                height={height}
                alt={alt}
            />
        </div>
    )
}

export function AvatarWithName({ img, name, username }: AvatarWithNameProps) {
    return (
        <div className="flex items-center gap-2">
            <Avatar path={img} />
            <Link href={username ?? '/'} className='cursor-pointer'>
                <h1 className="text-md font-bold">{name}</h1>
                <span className="text-textPrimary text-sm">@{username}</span>
            </Link>
        </div>
    );
}
