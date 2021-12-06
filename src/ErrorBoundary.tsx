import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.warn(123, { error, errorInfo });
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <h4 className="">Something went wrong.</h4>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
