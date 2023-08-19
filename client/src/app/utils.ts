
export const JWT: string = 'jwt'
import jwtDecode from 'jwt-decode'

export function getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch(Error) {
      return null;
    }
  }