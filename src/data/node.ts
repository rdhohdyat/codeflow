import { MarkerType } from "@xyflow/react";
import node from "../components/ui/node";

export const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 350, y: 0 },
    data: { label: "1" },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 350, y: 120 },
    data: { label: "2" },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 450, y: 120 },
    data: { label: "3" },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 350, y: 200 },
    data: { label: "4" },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 350, y: 300 },
    data: { label: "5" },
  },
];

export const initialEdges = [
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
];

export const nodeTypes = {
  custom: node,
};
