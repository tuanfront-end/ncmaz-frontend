import { ApolloError } from "@apollo/client";
import EmptyState from "components/EmptyState/EmptyState";
import Loading from "components/Loading/Loading";
import React, { FC } from "react";

export interface DataStatementBlockProps {
  data: {}[];
  loading?: boolean;
  error?: ApolloError;
}

const DataStatementBlock: FC<DataStatementBlockProps> = ({
  data = [],
  loading,
  error,
}) => {
  return (
    <>
      {loading && !data.length && (
        <div className="flex justify-center">
          <Loading />
        </div>
      )}

      {error && (
        <pre className="text-xs my-3">
          <code>{error.message}</code>
        </pre>
      )}

      {!data.length && !loading && <EmptyState />}
    </>
  );
};

export default DataStatementBlock;
