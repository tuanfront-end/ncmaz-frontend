import Alert from "components/Alert/Alert";
import NCMAZ_TRANSLATE from "contains/translate";
import React from "react";

interface MyProps {
  children?: React.ReactNode;
}
interface MyState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<MyProps, MyState> {
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
    if (this.state.hasError) {
      return (
        <div className="container py-10 flex">
          <Alert
            type="error"
            children={NCMAZ_TRANSLATE["somethingWentWrong"]}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
