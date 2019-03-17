import * as React from 'react';
import { observer } from 'mobx-react';

export const ExamSettingsTable = observer(
  () => {
    return (
    <>
        <div className="bp3-control-group">
            <div className="bp3-select">
            <select>
                <option value="1">Title</option>
                <option value="2">Subject</option>
                <option value="3">Negative Mark</option>
            </select>
            </div>
            <div className="bp3-input-group bp3-fill">
            <span className="bp3-icon bp3-icon-search"/>
            <input type="text" className="bp3-input" placeholder="Search" />
            </div>
        </div>
        <p className="f6 tc mt2 b bg-light-green br2 pa1">List of Exams</p>
        <table 
            className="bp3-html-table bp3-html-table-bordered
            bp3-html-table-striped bp3-interactive bp3-html-table-condensed w-100 ba b--light-silver"
        >
            <thead>
              <tr>
                  <th className="f7">#</th>
                  <th className="f7">Title</th>
                  <th className="f7">Subject</th>
                  <th className="f7">Negative Mark</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td className="f7">1</td>
                <td className="f7">ct02</td>
                <td className="f7">Zoology</td>
                <td className="f7">0.00</td>
            </tr>
            <tr>
                <td className="f7">2</td>
                <td className="f7">mt01</td>
                <td className="f7">Botany</td>
                <td className="f7">0.25</td>
            </tr>
            <tr>
                <td className="f7">3</td>
                <td className="f7">ct08</td>
                <td className="f7">Higher Mathmatics</td>
                <td className="f7">0.00</td>
            </tr>
            </tbody>
        </table>
    </>
    );
  }
);
