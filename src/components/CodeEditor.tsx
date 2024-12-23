import { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import { useCodeStore } from "../store/CodeStore";

function CodeEditor() {
  const { toast } = useToast();
  const editorRef = useRef<HTMLDivElement | null>(null);
  const monacoEditorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );

  const {code, setCode} = useCodeStore()


  useEffect(() => {
    if (!editorRef.current) return;

    const editor = monaco.editor.create(editorRef.current, {
      value: "# Python code\nprint('Hello, World!')",
      language: "python",
      theme: "vs-light",
      automaticLayout: true,
    });

    monacoEditorRef.current = editor;

    return () => {
      editor.dispose();
    };
  }, []);

  const isPythonCodeValid = (code: string): boolean => {
    try {
      const pythonKeywords = [
        "def",
        "return",
        "import",
        "if",
        "else",
        "elif",
        "for",
        "while",
        "print",
        "class",
        "try",
        "except",
        "with",
        "as",
        "from",
        "lambda",
        "pass",
        "break",
        "continue",
        "+",
        "-",
        "=",
        ">",
        "<",
        "<=",
        ">=",
        "!=",
        "===",
        "=="
      ];

      const isKeywordPresent = pythonKeywords.some((keyword) =>
        code.includes(keyword)
      );
      return isKeywordPresent;
    } catch (error) {
      return false;
    }
  };

  const handleGenerateCFG = () => {
    if (monacoEditorRef.current) {
      const codeInput = monacoEditorRef.current.getValue();

      if (isPythonCodeValid(codeInput)) {
        setCode(codeInput)
        toast({
          title: "Success create CFG!",
          description: `Code is:\n${code}`,
        });
      } else {
        toast({
          title: "Invalid Python Code",
          variant: "destructive",
          description: "Please enter valid Python code to analyze.",
        });
      }
    }
  };

  return (
    <div className="min-h-full flex flex-col xl:justify-normal justify-between gap-4 p-4 xl:p-0">
      <h1 className="xl:text-lg font-bold">Type Your Python Code Here</h1>
      <div
        ref={editorRef}
        className="h-[150px] xl:h-full -ml-8 rounded-lg border-0 border-gray-300"
      ></div>
      <div className="flex gap-2 border-t border-gray-300 pt-2">
        <Button
          variant="neutral"
          onClick={() => {
            if (monacoEditorRef.current) {
              monacoEditorRef.current.setValue("");
            }
          }}
        >
          Clear Code
        </Button>
        <Button className="w-full" onClick={handleGenerateCFG}>
          Generate CFG
        </Button>
      </div>
    </div>
  );
}

export default CodeEditor;
