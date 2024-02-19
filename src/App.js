import logo from './logo.svg';
import './App.css';
import { models } from 'powerbi-client';

import { PowerBIEmbed } from 'powerbi-client-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <PowerBIEmbed
          embedConfig={{
            type: 'ced14528-fba3-43cf-8860-4e9216294767',  
            id: process.env.re,
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=ced14528-fba3-43cf-8860-4e9216294767&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtVVMtRS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwiZGlzYWJsZUFuZ3VsYXJKU0Jvb3RzdHJhcFJlcG9ydEVtYmVkIjp0cnVlfX0%3d',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTYxNWNjNjgtYzUyZS00M2UzLTg3NTYtYzAxOWU4ZDJmMWJkLyIsImlhdCI6MTcwODM2MjA3OCwibmJmIjoxNzA4MzYyMDc4LCJleHAiOjE3MDgzNjcyODMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFYUTNMMUtLaTB0ZTNRYmxydWgvaE9kaGREQmsydngvMkdhMHMzbXhIVXBkRCtud1NmOVZGZS9ISHpGcmN1Y1lZIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiVGVzdGluZyIsImdpdmVuX25hbWUiOiJMZWFybnlzdCIsImlwYWRkciI6IjI0MDE6NDkwMDoxY2I5OjZhNmQ6YWRiZDo5NTlmOjEzOGQ6MmQ0IiwibmFtZSI6IkxlYXJueXN0IFRlc3RpbmciLCJvaWQiOiIwMjgwY2QzMC03MjY4LTQxMmYtYTVjNS02NWFkZGM3ZGUzNDYiLCJwdWlkIjoiMTAwMzIwMDM1NTBCMEMzMyIsInJoIjoiMC5BUzBBYU13VmxpN0Y0ME9IVnNBWjZOTHh2UWtBQUFBQUFBQUF3QUFBQUFBQUFBRDNBRlkuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiWTgxQUFzMTdhRVBiZmZKVGJlTkwzS0lfRU5meTlvdHBrb3QtdHJOM2pLZyIsInRpZCI6Ijk2MTVjYzY4LWM1MmUtNDNlMy04NzU2LWMwMTllOGQyZjFiZCIsInVuaXF1ZV9uYW1lIjoidGFzb2wzMTI1OEByb2hvemEuY29tIiwidXBuIjoidGFzb2wzMTI1OEByb2hvemEuY29tIiwidXRpIjoiTm5KSGV5V3haa2lGV0ZxYktQMFhBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.aWIXEf99SiPVqirZmj1cBLMr8UcnNFdWMAhotobsNfEZZDEr11VjoZ4BOJApgnx2OlRt41lhvg71TN45aD1Wh3A7K1lAc_pIVjR2lswWrNQi5crcdLZr3hJpOU2tvWEzi1hyRy_vQIWJEywKwhlWWJqImCObQDTSJ0voMfeZOd0Pte1szXoHOzH71DSVPXsoQNouHPmWshnAT7XYbJlWrwQCiqbVb7WFQhKZ3yYWm9uj83VFtNjmkbJFJmjg9Ns59UpiJjBeaw2zDb2M739h8QIhoZTGoOQaKv-tmAnkkxng-WMleEatSaVKNKpy6d4AXdgdHbUW85DG3O6dQ9S5eg',
            tokenType: models.TokenType.Aad, 
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
              background: models.BackgroundType.Transparent,
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }],
              ['visualClicked', () => console.log('visual clicked')],
              ['pageChanged', (event) => console.log(event)],
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
             window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
