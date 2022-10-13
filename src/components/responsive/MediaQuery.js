import {useMediaQuery} from './useMediaQuery';


/**
 * 
 * @param {any} children 
 * @param {string} query any media query string
 * @returns
 */
export const MediaQuery = ({children,query}) => {
  const isMatch  = useMediaQuery(query)
  return isMatch ? children : null;
}

