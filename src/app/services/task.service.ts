import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskId: string;
  private pollingIntervalMs = 5000; // Adjust the polling interval as needed

  constructor(private http: HttpClient) { }

  setTaskId(taskId: string): void {
    this.taskId = taskId;
  }

  checkTaskStatus(): Observable<any> {
    return this.http.get(`http://${environment.urls.backendURL}/api/check_task_status/${this.taskId}`);
  }

  pollTaskStatus(): Observable<any> {
    return timer(0, this.pollingIntervalMs).pipe(
      switchMap(() => {
        console.log('Polling for task status...'); // Log a message when polling starts
        return this.checkTaskStatus();
      }),
      takeWhile(response => response.status !== 'completed', true) // Stop polling when task is completed
    );
  }
}
