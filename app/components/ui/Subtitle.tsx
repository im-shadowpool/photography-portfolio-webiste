import React from 'react';
import { cn } from '@/app/lib/utils/cn';

interface SubtitleProps {
    children: React.ReactNode;
    className?: string;
    blurred?: boolean;
    as?: React.ElementType;
}

export function Subtitle({
    children,
    className,
    blurred = false,
    as: Component = "span"
}: SubtitleProps) {
    return (
        <Component
            className={cn(
                "subTitle inline-block",
                blurred && "subTitleBlured",
                className
            )}
        >
            {children}
        </Component>
    );
}
