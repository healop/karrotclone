package com.clone.karrotbackend.service;

import com.clone.karrotbackend.model.Board;
import com.clone.karrotbackend.repository.BoardRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
  private final BoardRepository boardRepository;

  public BoardService(BoardRepository boardRepository) {
    this.boardRepository = boardRepository;
  }

  public List<Board> getAllArticles() {
    return boardRepository.findAll();
  }

  public Board createArticle(Board board) {
    return boardRepository.save(board);
  }
}
