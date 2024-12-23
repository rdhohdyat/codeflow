import { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const Node = ({data} : any) => {
  return (
    <div className="h-12 w-12 bg-white flex items-center justify-center font-bold rounded-full border-2  border-border dark:border-darkBorder shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none ">
      <div className="flex-shrink-0">{data.label}</div>
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
};

export default memo(Node)

