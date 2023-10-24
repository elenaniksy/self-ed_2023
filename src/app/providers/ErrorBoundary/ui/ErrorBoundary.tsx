import React, { Component, ErrorInfo, Suspense } from 'react';
import { IProps } from 'app/types/IProps';
import { withTranslation } from 'react-i18next';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps extends IProps {}

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
