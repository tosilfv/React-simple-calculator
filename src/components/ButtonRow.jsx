import { Button } from "./Button";

export const ButtonRow = ({ td1, td2, td3, td4 }) => {
  return (
    <tr>
      {td1.handleClick ? (
        <td>
          <Button
            identifier={td1.identifier}
            value={td1.value}
            handleClick={td1.handleClick}
          />
        </td>
      ) : (
        <td className={td1.className}></td>
      )}
      {td2.handleClick ? (
        <td>
          <Button
            identifier={td2.identifier}
            value={td2.value}
            handleClick={td2.handleClick}
          />
        </td>
      ) : (
        <td className={td2.className}></td>
      )}
      {td3.handleClick ? (
        <td>
          <Button
            identifier={td3.identifier}
            value={td3.value}
            handleClick={td3.handleClick}
          />
        </td>
      ) : (
        <td className={td3.className}></td>
      )}
      {td4.handleClick ? (
        <td>
          <Button
            identifier={td4.identifier}
            value={td4.value}
            handleClick={td4.handleClick}
          />
        </td>
      ) : (
        <td className={td4.className}></td>
      )}
    </tr>
  );
};
