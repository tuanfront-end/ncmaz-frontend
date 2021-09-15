import { ApolloError } from "@apollo/client";
import EmptyState from "components/EmptyState/EmptyState";
import React, { FC } from "react";

export interface DataStatementBlockV2Props {
  data: any[];
  isSkeleton?: boolean;
  error?: ApolloError;
}

const DataStatementBlockV2: FC<DataStatementBlockV2Props> = ({
  data = [],
  isSkeleton,
  error,
}) => {
  return (
    <div className="my-5">
      {/* ERROR */}
      {error && (
        <pre className="text-xs">
          <code>{error.message}</code>
        </pre>
      )}

      {/* EMPTY STATE */}
      {!isSkeleton && !data.length && <EmptyState />}
    </div>
  );
};

export default DataStatementBlockV2;
