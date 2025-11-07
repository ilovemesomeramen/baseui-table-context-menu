'use client';
import { ContextMenu } from "@base-ui-components/react/context-menu";

function TableRow({idx}: {idx?: number}) {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger render={<tr />}>
        <td>Data {idx}</td>
        <td>Data {idx}</td>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Popup>
            <ContextMenu.Item>
              Dummy {idx}
            </ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}

export default function Home() {
  return (
    <main>
      <h1>BaseUI Table Context Menu Issue</h1>
      <p>Right-click on the table rows below to observe the issue.</p>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
            {[...Array(10).keys()].map((idx) => (<TableRow key={idx} idx={idx + 1} />))}
        </tbody>
      </table>
    </main>
  );
}
