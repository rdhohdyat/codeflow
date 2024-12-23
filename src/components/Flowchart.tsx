import {
  ReactFlow,
  Background,
  MarkerType,
  BackgroundVariant,
} from "@xyflow/react";
import node from "../components/ui/node";

import "@xyflow/react/dist/style.css";

const FlowChart = () => {
  const initialNodes = [
    {
      id: "1",
      type: "custom",
      position: { x: 200, y: 50 },
      data: { label: "1" },
    },
    {
      id: "2",
      type: "custom",
      position: { x: 200, y: 150 },
      data: { label: "2" },
    },
    {
      id: "3",
      type: "custom",
      position: { x: 300, y: 150 },
      data: { label: "3" },
    },
    {
      id: "4",
      type: "custom",
      position: { x: 200, y: 250 },
      data: { label: "4" },
    },
    {
      id: "5",
      type: "custom",
      position: { x: 200, y: 400 },
      data: { label: "5" },
    },
    {
      id: "6",
      type: "custom",
      position: { x: 200, y: 500 },
      data: { label: "6" },
    },
  ];

  const initialEdges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#000000",
      },
      style: {
        strokeWidth: 2,
        stroke: "#000000",
      },
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#000000",
      },
      style: {
        strokeWidth: 2,
        stroke: "#000000",
      },
    },
    {
      id: "e2-4",
      source: "2",
      target: "4",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#000000",
      },
      style: {
        strokeWidth: 2,
        stroke: "#000000",
      },
    },
    {
      id: "e3-5",
      source: "3",
      target: "5",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#000000",
      },
      style: {
        strokeWidth: 2,
        stroke: "#000000",
      },
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#000000",
      },
      style: {
        strokeWidth: 2,
        stroke: "#000000",
      },
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#000000",
      },
      style: {
        strokeWidth: 2,
        stroke: "#000000",
      },
    },
  ];

  const nodeTypes = {
    custom: node,
  };

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
      >
        <Background variant={BackgroundVariant.Lines} />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
