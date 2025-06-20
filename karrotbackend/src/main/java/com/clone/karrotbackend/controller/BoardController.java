package com.clone.karrotbackend.controller;

import com.clone.karrotbackend.model.Board;
import com.clone.karrotbackend.service.BoardService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/community")
@Tag(name = "Community API", description = "커뮤니티 관련 API")
public class BoardController {
  private final BoardService boardService;

  public BoardController(BoardService boardService) {
    this.boardService = boardService;
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
}
