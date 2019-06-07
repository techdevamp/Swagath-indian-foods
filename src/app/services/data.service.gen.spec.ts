import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
describe('DataService', () => {
  let service: DataService;
  beforeEach(() => {
    const httpClientStub = { get: () => ({}) };
    TestBed.configureTestingModule({
      providers: [
        DataService,
        { provide: HttpClient, useValue: httpClientStub }
      ]
    });
    service = TestBed.get(DataService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('getUsersList', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'get');
      service.getUsersList();
      expect(httpClientStub.get).toHaveBeenCalled();
    });
  });
  describe('getUserDetails', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'get');
      service.getUserDetails();
      expect(httpClientStub.get).toHaveBeenCalled();
    });
  });
});
