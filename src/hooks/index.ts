import { useRef, useEffect } from 'react';


export const useMount = (callback: () => void) => {
    useEffect(() => {
      callback();
    }, [callback]);
  };
  
/**
 * 返回组件的挂载状态，如果还没挂载或者已经卸载，返回false；反之，返回true
 */
 export const useMountedRef = () => {
    const mountedRef = useRef(false);
  
    useEffect(() => {
      mountedRef.current = true;
      return () => {
        mountedRef.current = false;
      };
    });
  
    return mountedRef;
  };

  export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
    const oldTitle = useRef(document.title).current;
    // 页面加载时: 旧title
    // 加载后：新title
  
    useEffect(() => {
      document.title = title;
    }, [title]);
  
    useEffect(() => {
      return () => {
        if (!keepOnUnmount) {
          // 如果不指定依赖，读到的就是旧title
          document.title = oldTitle;
        }
      };
    }, [keepOnUnmount, oldTitle]);
  };
  