package com.clone.karrotbackend.controller;

import com.clone.karrotbackend.model.Board;
import com.clone.karrotbackend.repository.BoardRepository;
import com.clone.karrotbackend.service.BoardService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/community")
@Tag(name = "Community API", description = "커뮤니티 관련 API")
public class BoardController {

  private final BoardRepository boardRepository;
  private final BoardService boardService;

  public BoardController(BoardService boardService, BoardRepository boardRepository) {
    this.boardService = boardService;
    this.boardRepository = boardRepository;
  }

  @GetMapping("/articles")
  @Operation(summary = "커뮤니티 글 목록 조회", description = "모든 커뮤니티 글을 조회합니다.")
  public List<Board> getAllArticles() {
    return boardService.getAllArticles();
  }

  @PostMapping("/article")
  @Operation(summary = "커뮤니티 글 작성", description = "새로운 커뮤니티 글을 작성합니다.")
  public Board createArticle(@RequestBody Board board) {
    return boardService.createArticle(board);
  }

  @GetMapping("/article/{articleId}")
  @Operation(summary = "커뮤니티 글 조회", description = "특정 커뮤니티 글을 조회합니다.")
  public Board getArticleById(@PathVariable Long articleId) {
    return boardService.getAllArticles().stream()
        .filter(article -> article.getArticleId().equals(articleId))
        .findFirst()
        .orElseThrow(() -> new RuntimeException("Article not found with articleId: " + articleId));
  }

  @PutMapping("/article/{articleId}")
  @Operation(summary = "커뮤니티 글 수정", description = "특정 커뮤니티 글을 수정합니다.")
  public Board updateArticle(@PathVariable Long articleId, @RequestBody Board updatedBoard) {
    return boardService.getAllArticles().stream()
        .filter(article -> article.getArticleId().equals(articleId))
        .findFirst()
        .map(article -> {
          article.setTitle(updatedBoard.getTitle());
          article.setContent(updatedBoard.getContent());
          article.setViewCount(updatedBoard.getViewCount());
          return boardService.createArticle(article);
        })
        .orElseThrow(() -> new RuntimeException("Article not found with articleId: " + articleId));
  }

  @DeleteMapping("/article/{articleId}")
  @Operation(summary = "커뮤니티 글 삭제", description = "특정 커뮤니티 글을 삭제합니다.")
  public void deleteArticle(@PathVariable Long articleId) {
    Board articleToDelete = boardService.getArticleById(articleId);
    boardService.deleteArticle(articleToDelete.getArticleId());
  }
}
