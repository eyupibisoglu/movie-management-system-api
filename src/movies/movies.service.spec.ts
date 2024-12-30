import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  

  describe('createTweet', () => {
    it('should be defined', () => {
        expect(service).toBeDefined();
      });

    it('should create movie', () => {
      // Arrange
      const payload = { "name": "Superman", "ageRestriction": 16 };

      // Act
      const movie = service.create(payload);

      // Assert
      expect(movie).toBe(payload);
    });
  });
});
