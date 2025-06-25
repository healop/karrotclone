package com.clone.karrotbackend.service;

import com.clone.karrotbackend.model.Board;
import com.clone.karrotbackend.repository.BoardRepository;

import jakarta.transaction.Transactional;

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

  public Board getArticleById(Long articleId) {
    return boardRepository.findById(articleId)
        .orElseThrow(() -> new RuntimeException("Article not found with articleId: " + articleId));
  }

  public Board updateArticle(Long articleId, Board updatedBoard) {
    Board existingBoard = getArticleById(articleId);
    existingBoard.setTitle(updatedBoard.getTitle());
    existingBoard.setContent(updatedBoard.getContent());
    existingBoard.setViewCount(updatedBoard.getViewCount());
    return boardRepository.save(existingBoard);
  }

  @Transactional
  public void deleteArticle(Long articleId) {
    Board existingBoard = getArticleById(articleId);
    System.out.println("삭제 대상 ID: " + existingBoard.getArticleId());
    boardRepository.delete(existingBoard);
    boardRepository.flush(); // 👈 강제로 flush

    // Board board = getArticleById(articleId);
    // System.out.println("삭제 대상 ID: " + board.getArticleId());
    // boardRepository.delete(board);
  }
}
