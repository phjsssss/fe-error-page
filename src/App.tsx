import { useCallback } from 'react';
import { useMount, useDocumentTitle } from './hooks';
import { useAsync } from './utils/use-async';
import { http } from './utils/http';
import { ErrorPage } from './types';
import { FullPageLoading, FullPageErrorFallback } from './components/lib';
import { CodeList } from './components/code-list';
import { ErrorTips } from './components/error-tips';
import './App.less';



function App() {
  useDocumentTitle("代码提示看板");
  const {
    data: errorPage,
    error,
    isLoading,
    isIdle,
    isError,
    run
  } = useAsync<ErrorPage | null>();

  const bootstrapError = async() => {
    const data = await http("error");
    if(data.status === "success") {
      return data;
    }
  }

  useMount(
    useCallback(() => {
      run(bootstrapError());
    }, [])
  );

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  return (
    <div className="App">
      <ErrorTips errList={errorPage?.err_line_number_list || []}/>
      <pre>
        <CodeList code={errorPage?.code} err={errorPage?.err_line_number_list || []}/>
      </pre>
    </div>
  );
}

export default App;
