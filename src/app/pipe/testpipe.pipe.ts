import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  transform(records: any[], searchText: string): any[] {
    if (!records) return [];
    if (!searchText) return records;
    return records.filter(response => {
      return (response.title.toLowerCase().includes(searchText.toLowerCase())||response.description.toLowerCase().includes(searchText.toLowerCase()));
    });
  }


}
