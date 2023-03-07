import jwt from 'jsonwebtoken';
export function generateJwt(payload) {
  const token = jwt.sign(payload, 'thisIsTheSecret', {
    expiresIn: '10h',
  });

  return { jwtToken: token };
}
