import { PageError } from 'widgets/PageError';
import React, { Component, Suspense } from 'react';

import type { ErrorInfo } from 'react';
import type { IProps } from 'app/types/IProps';

type ErrorBoundaryProps = IProps

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return this.props.children;
    }
}
